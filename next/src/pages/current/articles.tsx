import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import EditIcon from '@mui/icons-material/Edit'
import {
  Avatar,
  Box,
  Container,
  Divider,
  Tooltip,
  Typography,
  IconButton,
} from '@mui/material'
import camelcaseKeys from 'camelcase-keys'
import type { NextPage } from 'next'
import Link from 'next/link'
import useSWR from 'swr'
import Error from '@/components/Error'
import Loading from '@/components/Loading'
import { useUserState } from '@/hooks/useGlobalState'
import { useRequireSignedIn } from '@/hooks/useRequireSignedIn'
import { styles } from '@/styles'
import { fetcher } from '@/utils'

type ArticleProps = {
  id: number
  title: string
  status: string
}

const CurrentArticles: NextPage = () => {
  useRequireSignedIn()
  const [user] = useUserState()

  const url = process.env.NEXT_PUBLIC_API_BASE_URL + '/current/articles'
  const { data, error } = useSWR(user.isSignedIn ? url : null, fetcher)

  if (error) return <Error />
  if (!data) return <Loading />

  const articles: ArticleProps[] = camelcaseKeys(data)

  return (
    <Box
      css={styles.pageMinHeight}
      sx={{
        borderTop: '0.5px solid #acbcc7',
        pb: 8,
      }}
    >
      <Container maxWidth="md" sx={{ pt: 6, px: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Typography component="h2" sx={{ fontSize: 32, fontWeight: 'bold' }}>
            記事の管理
          </Typography>
        </Box>

        {articles.map((article: ArticleProps, i: number) => (
          <>
            <Box
              key={i}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                minHeight: 80,
              }}
            >
              <Box sx={{ width: 'auto', pr: 3 }}>
                <Typography
                  component="h3"
                  sx={{
                    fontSize: { xs: 16, sm: 18 },
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                >
                  {article.title}
                </Typography>
              </Box>
              <Box
                sx={{
                  minWidth: 180,
                  width: 180,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <>
                  {article.status == '下書き' && (
                    <Box
                      sx={{
                        display: 'inline',
                        fontSize: 12,
                        textAlgin: 'center',
                        border: '1px solid #9FAFBA',
                        p: '4px',
                        borderRadius: 1,
                        color: '#9FAFBA',
                        fontWeight: 'bold',
                      }}
                    >
                      {article.status}
                    </Box>
                  )}
                  {article.status == '公開中' && (
                    <Box
                      sx={{
                        display: 'inline',
                        fontSize: 12,
                        textAlgin: 'center',
                        border: '1px solid #3EA8FF',
                        p: '4px',
                        borderRadius: 1,
                        color: '#3EA8FF',
                        fontWeight: 'bold',
                      }}
                    >
                      {article.status}
                    </Box>
                  )}
                </>
                <Box>
                  <Avatar>
                    <Tooltip title="編集する">
                      <IconButton sx={{ backgroundColor: '#F1F5FA' }}>
                        <EditIcon sx={{ color: '#99AAB6' }} />
                      </IconButton>
                    </Tooltip>
                  </Avatar>
                </Box>
                <Box>
                  <Link href={'/current/articles/' + article.id}>
                    <Avatar>
                      <Tooltip title="表示を確認">
                        <IconButton sx={{ backgroundColor: '#F1F5FA' }}>
                          <ChevronRightIcon sx={{ color: '#99AAB6' }} />
                        </IconButton>
                      </Tooltip>
                    </Avatar>
                  </Link>
                </Box>
              </Box>
            </Box>
            <Divider />
          </>
        ))}
      </Container>
    </Box>
  )
}

export default CurrentArticles
